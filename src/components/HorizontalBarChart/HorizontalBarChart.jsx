import React from "react";
import PropTypes from "prop-types";
import { ResponsiveBar } from "@nivo/bar";

const ValueOutside = ({ bars }) => {
  return bars.map((bar) => {
    const {
      key,
      x,
      y,
      data: { indexValue },
    } = bar;

    return (
      <g key={key} transform={`translate(${x}, ${y})`}>
        <text
          transform={`translate(${0}, ${-8})`}
          fontSize="14px"
          fontWeight={500}
        >
          {indexValue}
        </text>
      </g>
    );
  });
};

const HorizontalBarChart = ({ data }) => {
  if (!data?.length) return null;

  return (
    <div style={{ height: "230px", width: "245px" }}>
      <ResponsiveBar
        layout="horizontal"
        data={data}
        keys={[data[0]?.key]}
        indexBy={`${data[0]?.indexBy}`}
        padding={0.85}
        colors="black"
        tooltip={() => {}}
        enableLabel={false}
        maxValue={100}
        minValue={0}
        theme={{
          grid: {
            line: {
              stroke: "white",
              strokeWidth: 6,
            },
          },
        }}
        layers={["grid", "bars", (props) => <ValueOutside {...props} />]}
      />
    </div>
  );
};

HorizontalBarChart.defaultProps = {
  data: null,
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array,
};

export default React.memo(HorizontalBarChart);
