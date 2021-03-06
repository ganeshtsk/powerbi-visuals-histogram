/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {
    // d3
    import HistogramBin = d3.layout.histogram.Bin;

    // powerbi.extensibility.utils.formatting
    import IValueFormatter = powerbi.extensibility.utils.formatting.IValueFormatter;

    // powerbi.extensibility.utils.tooltip
    import TooltipEnabledDataPoint = powerbi.extensibility.utils.tooltip.TooltipEnabledDataPoint;

    // powerbi.extensibility.utils.interactivity
    import SelectableDataPoint = powerbi.extensibility.utils.interactivity.SelectableDataPoint;

    // powerbi.extensibility.utils.svg
    import ISize = powerbi.extensibility.utils.svg.shapes.ISize;

    export interface HistogramSubDataPoint extends SelectableDataPoint {
        highlight?: boolean;
    }

    export interface HistogramDataPoint extends
        HistogramBin<number>,
        TooltipEnabledDataPoint {

        range: number[];
        subDataPoints: HistogramSubDataPoint[];
        size?: ISize;
    }

    export interface HistogramBorderValues {
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    }

    export interface HistogramDataView {
        dataPoints: HistogramDataPoint[];

        borderValues: HistogramBorderValues;

        settings: HistogramSettings;
        formatter: IValueFormatter;

        xLegendSize: number;
        yLegendSize: number;

        xScale?: d3.scale.Linear<any, any>;
        yScale?: d3.scale.Linear<any, any>;

        xLabelFormatter?: IValueFormatter;
        yLabelFormatter?: IValueFormatter;
    }
}
