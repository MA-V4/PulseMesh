const alertMessages = [

  {
    severity: "warning",
    title: "High latency detected",
    description:
      "Metrics node exceeding threshold.",
  },

  {
    severity: "critical",
    title: "Worker node degraded",
    description:
      "Packet loss detected in worker cluster.",
  },

  {
    severity: "healthy",
    title: "Cluster stabilized",
    description:
      "Latency returned to baseline.",
  },

]

export function generateRandomAlert() {

  const random =
    alertMessages[
      Math.floor(
        Math.random() *
        alertMessages.length
      )
    ]

  return {

    id: crypto.randomUUID(),

    timestamp:
      new Date().toLocaleTimeString(),

    ...random,

  }
}