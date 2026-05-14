import { CSSProperties, type FC, useState, useCallback } from "react";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, type Node } from '@xyflow/react';

import backgroundImage from '../../assets/logo.webp';
import { initialNodes } from "../../data/nodes";
import { initialEdges } from "../../data/edges";
import { MachineNodeType, MachineNodeData, MachineStatus } from "../../shared/types";

import { MachineNode } from './MachineNode';
import { MachinePanel } from "../MachinePanel";
import { StatusEdge } from "./StatusEdge";

import '@xyflow/react/dist/style.css';
import './FlowViewer.css';

const BG_COLOR = '#00568c';

const logoContainerStyle = {
  width: '100vw',
  height: '100px',
  margin: '0px 0px 0px 0px',
  background: BG_COLOR,
  display: 'flex',
  alignItems: 'center',
  padding: '0 15px',
  boxSizing: 'border-box' as const
};

const logoImgStyle = {
  height: '60px',
  marginRight: '20px',
};

const pageStyle: CSSProperties = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: BG_COLOR,
};

const diagramStyle = {
  marginInline: '20px',
  border: '2px solid white',
  height: '60vh',
  background: '#1d2226',
};

const panelStyle = {
  height: '500px',
  border: '2px solid #ccc',
  padding: '20px',
  margin: '20px',
  backgroundColor: '#1d2226',
};

const initialViewport = { x: 50, y: 150, zoom: 1.5 };

const nodeTypes = { machine: MachineNode };
const edgeTypes = { statusEdge: StatusEdge };

export const FlowViewer: FC = () => {
  const [selectedNode, setSelectedNode] = useState<MachineNodeType>(null);
  const [edges, setEdges] = useState(initialEdges);
  const [nodes, setNodes] = useState<Node<MachineNodeData>[]>(initialNodes);

  const updateMachineStatus = (id: string, newStatus: MachineStatus) => {
    setNodes(prevArr =>
      prevArr.map(node => node.id === id
        ? ({ ...node, data: { ...node.data, status: newStatus } })
        : node
      )
    );

    setSelectedNode(p => ({ ...p, data: { ...p.data, status: newStatus } }));
    console.log('updateMachineStatus'); // AEG
  };

  const onNodeClick = useCallback((_, node: MachineNodeType) => {
    setSelectedNode(node);
  }, [setSelectedNode]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  console.log('nodes -------------------'); // AEG
  console.log(nodes);
  console.log('selectedNode ------------');
  console.log(selectedNode);

  return (
    <div id="flow-viewer" style={pageStyle}>
      <div style={logoContainerStyle}>
        <img src={backgroundImage} alt="Logo" style={logoImgStyle} />
        <div style={{ color: 'white' }}>
          <h1 style={{ margin: 0, fontSize: '24px', paddingTop: '7px' }}>{"System state"}</h1>
        </div>
      </div>

      <div style={diagramStyle}>
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onNodeClick={onNodeClick}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onPaneClick={() => setSelectedNode(null)}
          defaultViewport={initialViewport}
          proOptions={{ hideAttribution: true }}
        />
      </div>
      
      <div style={panelStyle}>
        {selectedNode && (
          <MachinePanel
            node={selectedNode}
            onChangeStatus={s => updateMachineStatus(selectedNode.id, s)}
          />
        )}

        {!selectedNode && (
          <>
            <h3>{"Your options:"}</h3>
            <div>{"- Use mouse wheel to zoom in"}</div>
            <div>{"- Pan the graph background to drag all nodes at once"}</div>
            <div>{"- Click on a node to start or stop the machine"}</div>
            <div style={{ paddingTop: 18 }}>{"On initial load, all machines are stopped."}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlowViewer;
