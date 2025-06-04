using Microsoft.Extensions.DependencyInjection;

namespace uPlotBlazorWrapper;

public static class ServiceInstaller
{
    public static void AdduPlotBlazorWrapperServices(this IServiceCollection services)
    {
        services.AddScoped<ChartJsInterop>();
    }
}