const { MeterProvider } = require('@opentelemetry/metrics')
const { CollectorMetricExporter } = require('@opentelemetry/exporter-collector-grpc')

const exporter = new CollectorMetricExporter()
const provider = new MeterProvider({ exporter })

const meter = provider.getMeter('express')

const counter = meter.createCounter('requests')

module.exports.counter = (req, res, next) => {
  counter.add(1, {
    path: req.path,
    method: req.method
  })
  next()
}
