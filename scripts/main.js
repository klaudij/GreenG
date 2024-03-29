// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'

/* IMPORT */ 
import storyAdnFollowQ from './storytelling.js';
import tutorialStart from './tutorial.js';

import CONFIG from './config.js';
import request from './request.js';

storyAdnFollowQ();
tutorialStart();

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
async function start() {
	const dataa = await request(CONFIG.url);

	const margin = 0,
			padding = 3,
			diameter = 750,
			width = 750,
			height= 750;
	
			const color = d3.scale.linear()
			.domain([0, depthCount(dataa)])
			.range(["white", "#FDCE17"])
	
			const pack = d3.layout.pack()
			.padding(padding)
			.size([diameter, diameter])
			.value(function(d) {
					return d.size;
			}),
			arc = d3.svg.arc().innerRadius(0),
			pie = d3.layout.pie;
	
			const svg = d3.select("svg")
			.attr("width", width )
			.attr("height", height)
			.append("g")
			.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");
	
			var focus = dataa,
			newData = pack.nodes(dataa),
			view;

			const circle = svg.selectAll("circle")
			.data(newData)
			.enter().append("circle") 
			.attr("pointer-events", d => !d.children ? "none" : null)
			.attr("class", function(d) {
					return d.children ? "node" : "node node--leaf" ;
			})
			.style("fill", function(d) {
				return d.children ? color(d.depth) : null;
			})
			.style("fill-opacity", function(d) {
				return d.parent === dataa ? 1 : 0;
			})
			.style("display", function(d) {
				return d.parent === dataa ? null : "none";
			})
			.on("mouseover", (e, i) =>  
			  d3.select("#tooltip1")
			  .html("<p>" + newData[i].name +"</p> ")
			  .transition()
			  .duration(175)
			  .style("opacity", 1)
			)
			.on("mousemove", (e) => 
			  d3.select("#tooltip1")
			  .style("left", (d3.event.pageX + 20) + "px")
			  .style("top", (d3.event.pageY) + "px")
			)
			.on("mouseout", function(d) {
				d3.select("#tooltip1").style("opacity", 0)
			  })
			.on("click", function(d) {
				d3.select(this).classed("borderr", function() { return !this.classList.contains("borderr"); });
			})
			.on("dblclick", function(d) {
					if (focus !== d) zoom(d), d3.event.stopPropagation();
			});

			const text = svg.selectAll("text")
			.data(newData)
			.enter().append("text")
			.attr("class", "label")
			.style("text-anchor", "middle")
			.style("opacity", function(d) {
				if (d.depth === 3)
				return 0;
			})
			.style("fill-opacity", function(d) {
					return d.parent === dataa ? 1 : 0;
			})
			.style("display", function(d) {
					return d.parent === dataa ? null : "none";
			})
			.text(function(d) {
					return d.name;
			});
		
			const circleAndText = svg.selectAll("circle, text");
	
	
	function zoom(d) {
			focus = d;
	
			const transition = d3.transition()
					.duration(d3.event.altKey ? 7500 : 750)
					.tween("zoom", function(d) {
						const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
							return function(t) {
									zoomTo(i(t));
							};
					});
	
			transition.selectAll("text")
					.filter(function(d) {
							return d.parent === focus || this.style.display === "inline";
					})
					.style("fill-opacity", function(d) {
							return d.parent === focus ? 1 : 0;
					})
					.each("start", function(d) {
							if (d.parent === focus) this.style.display = "inline";
					})
					.each("end", function(d) {
							if (d.parent !== focus) this.style.display = "none";
					});
	
	
					transition.selectAll("circle")
					.filter(function(d) {
						return d.parent === focus || this.style.display === "block";
					})
					.style("fill-opacity", function(d) {
							return d.parent === focus ? 1 : 0;
					})
					.each("start", function(d) {
							if (d.parent === focus) this.style.display = "block";
					})
					.each("end", function(d) {
							if (d.parent !== focus) this.style.display = "none";
					});
	}
	
	function zoomTo(v) {
		const k = diameter / v[2];
			view = v;
			circleAndText.attr("transform", function(d) {
					return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
			});
			circle.attr("r", function(d) {
					return d.r * k;
			});
	}
	
	
	d3.select("body")
			.on("dblclick", function() {
					zoom(dataa);
			});
	
			
	zoomTo([dataa.x, dataa.y, dataa.r * 2 + margin]);
	
	/**
	 * Counts JSON graph depth
	 * @param {object} branch
	 * @return {Number} object graph depth
	 */
	function depthCount(branch) {
			if (!branch.children) {
					return 1;
			}
			return 1 + d3.max(branch.children.map(depthCount));
	}
	
	d3.select(self.frameElement).style("height", diameter + "px");
	
}
start();
