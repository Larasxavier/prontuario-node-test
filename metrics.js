const metrics = {
  requests_total: 0,
  errors_total: 0,
  latency_ms: [],
  started_at: Date.now()
};

function recordRequest(durationMs) {
  metrics.requests_total++;
  metrics.latency_ms.push(durationMs);
}

function recordError() {
  metrics.errors_total++;
}

function getMetrics() {
  const avgLatency =
    metrics.latency_ms.length > 0
      ? (metrics.latency_ms.reduce((a, b) => a + b) / metrics.latency_ms.length).toFixed(2)
      : 0;

  return `
# HELP api_requests_total Número total de requisições
# TYPE api_requests_total counter
api_requests_total ${metrics.requests_total}

# HELP api_errors_total Número total de erros
# TYPE api_errors_total counter
api_errors_total ${metrics.errors_total}

# HELP api_latency_ms Latência média das requisições
# TYPE api_latency_ms gauge
api_latency_ms ${avgLatency}

# HELP api_uptime_ms Uptime da aplicação em milissegundos
# TYPE api_uptime_ms gauge
api_uptime_ms ${Date.now() - metrics.started_at}
`;
}

module.exports = { recordRequest, recordError, getMetrics };
