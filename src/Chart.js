import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import styles from "./Chart.module.scss";
import { Link } from "react-router-dom";

function Chart() {
  const [data, setData] = useState([150, 250, 60, 150, 100, 175]);
  const svgRef = useRef();

  function getRandom() {
    return Math.floor(Math.random() * (301 - 1) + 0);
  }

  function randomize() {
    const newData = [];
    for (let i = 0; i < 6; i++) {
      const rand = getRandom();
      newData.push(rand);
    }
    setData(newData);
    //console.log(data);
  }

  function draw(data) {
    //setting up the svg container
    let w = 400;
    let h = 300;
    let svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");

    //setting up the scaling
    let xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);

    let yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    //setting up the axes
    let xAxis = d3.axisBottom(xScale).ticks(data.length);
    let yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0,${h})`);
    svg.append("g").call(yAxis);

    //setting up the svg data
    function update(data) {
      // Update the X axis
      xScale.domain(data.map((val, i) => i));
      xAxis = d3.axisBottom(xScale).ticks(data.length);

      // Update the Y axis
      yScale.domain([0, h]).range([h, 0]);
      yAxis = d3.axisLeft(yScale).ticks(5);

      // Create the u variable
      var u = svg.selectAll("rect").data(data);

      u.enter()
        .append("rect") // Add a new rect for each new elements
        .merge(u) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
        .attr("x", (v, i) => xScale(i))
        .attr("y", yScale)
        .attr("width", xScale.bandwidth())
        .attr("height", (val) => h - yScale(val));

      // If less group in the new dataset, I delete the ones not in use anymore
      u.exit().remove();
    }
    update(data);
  }

  useEffect(() => {
    draw(data);
  }, [data]);

  return (
    <div className={styles.Chart}>
      <h1>Randomized Bar Chart</h1>
      <span>Click the button below to randomize the data of the chart</span>
      <svg ref={svgRef}></svg>
      <button type="button" className={styles.Chart_button} onClick={randomize}>
        Randomize
      </button>
      <Link to="/">Back to Register Page!!</Link>
    </div>
  );
}

export default Chart;
