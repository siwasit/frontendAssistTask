import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

const NetworkGraph = () => {
  const nodes = [
    { id: 'node1', label: 'Node 1', x: 50, y: 50 },
    { id: 'node2', label: 'Node 2', x: 150, y: 150 },
    { id: 'node3', label: 'Node 3', x: 29, y: 158 },
    { id: 'node4', label: 'Node 4', x: 40, y: 350 },
    // Add more nodes as needed
  ];

  const edges = [
    { id: 'edge1', source: 'node1', target: 'node2' },
    { id: 'edge2', source: 'node2', target: 'node3' },
    { id: 'edge3', source: 'node2', target: 'node4' },
    { id: 'edge4', source: 'node4', target: 'node1' },
    // Add more edges as needed
  ];

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        {edges.map(edge => (
          <Line
            key={edge.id}
            x1={nodes.find(node => node.id === edge.source).x}
            y1={nodes.find(node => node.id === edge.source).y}
            x2={nodes.find(node => node.id === edge.target).x}
            y2={nodes.find(node => node.id === edge.target).y}
            stroke="black"
            strokeWidth="2"
          />
        ))}
        {nodes.map(node => (
          <Circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={20}
            fill="blue"
          />
        ))}
        {nodes.map(node => (
          <SvgText
            key={node.id}
            x={node.x - 20}
            y={node.y}
            fill="white"
            fontSize="12"
            fontWeight="bold"
            textAnchor="middle"
          >
            {node.label}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    width: '100%',
    height: '100%',
  },
});

export default NetworkGraph;
