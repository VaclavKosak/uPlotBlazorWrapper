window.uPlotInterop = {
    initChart: function (chartId, title, seriesLabels, initialData, lineColors) {
        console.log("Initializing chart with data:", initialData);
        const opts = {
            title: title,
            width: 800,
            height: 400,
            scales: {
                x: {
                    time: false,
                },
            },
            series: [
                {},
                ...seriesLabels.map((label, index) => ({
                    label: label,
                    stroke: lineColors[index] || "black", // Use provided colors or fallback to black
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
        chartElement.uplotData = initialData;
    },

    updateChart: function (chartId, newData) {
        const chartElement = document.getElementById(chartId);
        if (chartElement && chartElement.uplot) {
            chartElement.uplot.setData(newData);
            chartElement.uplotData = newData;
        }
    },

    appendData: function (chartId, newData) {
        const chartElement = document.getElementById(chartId);
        if (chartElement && chartElement.uplot && chartElement.uplotData) {
            for (let i = 0; i < chartElement.uplotData.length; i++) {
                chartElement.uplotData[i] = chartElement.uplotData[i].concat(newData[i]);
            }
            chartElement.uplot.setData(chartElement.uplotData);
        }
    }
};
