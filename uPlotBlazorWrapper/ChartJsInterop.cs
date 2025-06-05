using Microsoft.JSInterop;

namespace uPlotBlazorWrapper;

public class ChartJsInterop(IJSRuntime jsRuntime)
{
    private readonly Lazy<Task<IJSObjectReference>> _moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
        "import", "./_content/uPlotBlazorWrapper/uPlotInterop.js").AsTask());

    public async ValueTask InitChart(string chartId, string title, List<string> seriesLabels,
        List<List<double>> initialData, List<string> lineColors)
    {
        await _moduleTask.Value;
        await jsRuntime.InvokeVoidAsync("uPlotInterop.initChart", chartId, title, seriesLabels, initialData,
            lineColors);
    }

    public async ValueTask UpdateChart(string chartId, List<List<double>> newData)
    {
        await _moduleTask.Value;
        await jsRuntime.InvokeVoidAsync("uPlotInterop.updateChart", chartId, newData);
    }

    public async ValueTask AppendData(string chartId, List<List<double>> newData)
    {
        await _moduleTask.Value;
        await jsRuntime.InvokeVoidAsync("uPlotInterop.appendData", chartId, newData);
    }
}