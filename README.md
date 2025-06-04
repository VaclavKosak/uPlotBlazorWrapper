# uPlotBlazorWrapper

`uPlotBlazorWrapper` is a Blazor wrapper for [uPlot](https://github.com/leeoniya/uPlot), a fast and lightweight charting library. This library allows you to easily integrate high-performance charts into your Blazor applications.

## Features
- **Lightweight**: Minimal overhead for fast rendering.
- **Customizable**: Flexible options for chart appearance and behavior.
- **Blazor Integration**: Seamless integration with Blazor's component model.

## Installation
To use `uPlotBlazorWrapper`, add the NuGet package to your project:

```bash
dotnet add package uPlotBlazorWrapper
```

## Getting Started

### 1. Register Services
In your `Program.cs`, register the services provided by `uPlotBlazorWrapper`:

```csharp
using uPlotBlazorWrapper;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AdduPlotBlazorWrapperServices();

await builder.Build().RunAsync();
```

### 2. Add the Component
Use the `ChartComponent` in your Razor file to render a chart:

```razor
@page "/chart"

<ChartComponent 
    Title="Sample Chart" 
    SeriesLabels="@new List<string> { \"Series 1\", \"Series 2\" }" 
    InitialData="@new List<List<double>> { new List<double> { 1, 2, 3 }, new List<double> { 4, 5, 6 } }" 
    LineColors="@new List<string> { \"red\", \"blue\" }" />
```

### 3. Include Static Files
Ensure the static files (`uPlotInterop.js` and `uPlot.min.css`) are correctly served from your `wwwroot` folder. These files are automatically included when you install the NuGet package.

### 4. Include CSS and JS Files
To ensure proper functionality, include the following CSS and JS files in your `index.html` file:

```html
<link href="_content/uPlotBlazorWrapper/uPlot.min.css" rel="stylesheet" />
<script src="_content/uPlotBlazorWrapper/uPlot.iife.min.js"></script>
```

These files are required for the charts to render correctly and are automatically included in the NuGet package.

## Example
Here is a complete example of a Blazor page using `uPlotBlazorWrapper`:

```razor
@page "/example"

<PageTitle>Chart Example</PageTitle>

<h3>Chart Example</h3>

<ChartComponent 
    Title="Sales Data" 
    SeriesLabels="@new List<string> { \"Q1\", \"Q2\", \"Q3\", \"Q4\" }" 
    InitialData="@new List<List<double>> { new List<double> { 10, 20, 30, 40 }, new List<double> { 15, 25, 35, 45 } }" 
    LineColors="@new List<string> { \"green\", \"orange\" }" />
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/VaclavKosak/uPlotBlazorWrapper).
