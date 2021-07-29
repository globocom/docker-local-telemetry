const { Resource } = require('@opentelemetry/resources')
const { NodeTracerProvider } = require('@opentelemetry/node')
const { BatchSpanProcessor } = require('@opentelemetry/tracing')
const { registerInstrumentations } = require('@opentelemetry/instrumentation')
const { CollectorTraceExporter } = require('@opentelemetry/exporter-collector-grpc')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')

const provider = new NodeTracerProvider()

provider.resource = provider.resource.merge({
  attributes: { 'service.name': 'express' }
})

const exporter = new CollectorTraceExporter()
const processor = new BatchSpanProcessor(exporter)
provider.addSpanProcessor(processor)

provider.register()

registerInstrumentations({
  instrumentations: [
    getNodeAutoInstrumentations()
  ]
})

console.log('Tracing initialized')
