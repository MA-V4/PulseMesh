import {

  useState,
  useEffect,

} from "react"

import GlassCard from "../ui/GlassCard"

import ClusterNode from "./ClusterNode"

import PacketTrail from "./PacketTrail"

import TopologyEdge from "./TopologyEdge"

import FloatingParticles
  from "./FloatingParticles"

import NodeInspector
  from "./NodeInspector"

import {
  clusterNodes,
} from "../../data/clusterNodes"

const connections = [

  ["gateway", "auth"],
  ["gateway", "metrics"],
  ["gateway", "cache"],
  ["gateway", "workers"],

]

const states = [
  "healthy",
  "warning",
  "critical",
]

export default function NetworkMap() {

  const [nodes, setNodes] =
    useState(clusterNodes)

  const [selectedNode,
    setSelectedNode] =
      useState(null)

  useEffect(() => {

    const interval =
      setInterval(() => {

        setNodes((prev) =>

          prev.map((node) => ({

            ...node,

            load:
              Math.max(
                10,
                Math.min(
                  100,
                  node.load +
                  Math.floor(
                    Math.random() * 15 - 7
                  )
                )
              ),

            health:
              states[
                Math.floor(
                  Math.random() *
                  states.length
                )
              ],

          }))

        )

      }, 3000)

    return () =>
      clearInterval(interval)

  }, [])

  const getNode = (id) =>
    nodes.find((n) => n.id === id)

  return (

    <GlassCard
      className="
        p-8

        h-[500px]
        lg:h-[620px]

        relative
        overflow-hidden
      "
    >

      <FloatingParticles />

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.08),transparent_60%)]
        "
      />

      <h2
        className="
          text-2xl
          lg:text-3xl

          font-black

          mb-8
        "
      >
        Distributed Cluster Topology
      </h2>

      <div className="relative w-full h-full">

        {connections.map(([a, b]) => {

          const nodeA = getNode(a)
          const nodeB = getNode(b)

          return (

            <TopologyEdge
              key={`${a}-${b}`}
              x1={nodeA.x}
              y1={nodeA.y}
              x2={nodeB.x}
              y2={nodeB.y}
            />

          )

        })}

        {connections.map(([a, b], i) => {

          const nodeA = getNode(a)
          const nodeB = getNode(b)

          return (

            <PacketTrail
              key={i}
              x1={nodeA.x}
              y1={nodeA.y}
              x2={nodeB.x}
              y2={nodeB.y}
            />

          )

        })}

        {nodes.map((node) => (

          <ClusterNode
            key={node.id}
            node={node}
            onHover={setSelectedNode}
          />

        ))}

        <NodeInspector
          node={selectedNode}
        />

      </div>

    </GlassCard>

  )
}