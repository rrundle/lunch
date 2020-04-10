import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb'
import { Radar, Line, Bar, Doughnut, Polar } from 'react-chartjs-2'
import {
  doughnutData,
  doughnutOption,
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
  polarOption,
  polarData,
  lineChart2Data,
  lineChart2option,
  data,
} from '../../charts-data/chartjsData'

const ChartJs = () => {
  const datasetKeyProvider = () => {
    return Math.random()
  }
  return (
    <Fragment>
      <Breadcrumb title="Chartjs" parent="Chart" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Bar Chart</h5>
              </div>
              <div className="card-body chart-block">
                <Bar
                  data={barChartData}
                  options={barChartOptions}
                  width={778}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Line Chart</h5>
              </div>
              <div className="card-body chart-block">
                <Line
                  data={lineChartData}
                  options={lineChartOptions}
                  datasetKeyProvider={datasetKeyProvider}
                  width={778}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Line Chart-2 Chart</h5>
              </div>
              <div className="card-body chart-block line-chartjs">
                <Line
                  data={lineChart2Data}
                  options={lineChart2option}
                  datasetKeyProvider={datasetKeyProvider}
                  width={778}
                  height={400}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Doughnut Chart</h5>
              </div>
              <div className="card-body chart-block">
                <div className="carddoughnutData, doughnutOption,-body">
                  <Doughnut
                    data={doughnutData}
                    options={doughnutOption}
                    width={778}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Render Chart</h5>
              </div>
              <div className="card-body chart-block render-lines">
                <Radar data={data} width={778} height={400} />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5>Polar Chart</h5>
              </div>
              <div className="card-body chart-block render-lines">
                <Polar
                  data={polarData}
                  options={polarOption}
                  width={778}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ChartJs
