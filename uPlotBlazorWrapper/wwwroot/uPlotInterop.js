window.uPlotInterop = {
    initChart: function (chartId, title, seriesLabels, initialData) {
        console.log("Initializing chart with data:", initialData);
        const opts = {
            title: title,
            width: 800,
            height: 400,
            series: [
                {},
                ...seriesLabels.map((label, index) => ({
                    label: label,
                    stroke: ["red", "blue", "green"][index] || "black", // Assign colors to series
                    width: 2 // Set line width for better visibility
                }))
            ],
            axes: [
                {},
                {
                    scale: "%",
                    values: (u, vals) => vals.map(v => v.toFixed(1) + "%")
                }
            ]
        };

        const chartElement = document.getElementById(chartId);
        const uplot = new uPlot(opts, initialData, chartElement);

        chartElement.uplot = uplot;
    },

    updateChart: function (chartId, newData) {
        const chartElement = document.getElementById(chartId);
        if (chartElement && chartElement.uplot) {
            chartElement.uplot.setData(newData);
        }
    }
};
