// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'

/* IMPORT */ 
import storyAdnFollowQ from './storytelling.js';
import tutorialStart from './tutorial.js';
import data from './data.js';

// We can use node_modules directely in the browser!
// import * as d3 from 'd3';



console.log('Hello, world!');
storyAdnFollowQ();
tutorialStart();

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


	const root = data();
	let focus = root;
	let view;
  
	const svg = d3.create("svg")
		.attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
		.style("display", "block")
		.style("margin", "0 -14px")
		.style("background", color(0))
		.style("cursor", "pointer")
		.on("click", () => zoom(root));
  
	const node = svg.append("g")
	  .selectAll("circle")
	  .data(root.descendants().slice(1))
	  .join("circle")
		.attr("fill", d => d.children ? color(d.depth) : "white")
		.attr("pointer-events", d => !d.children ? "none" : null)
		.on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
		.on("mouseout", function() { d3.select(this).attr("stroke", null); })
		.on("click", d => focus !== d && (zoom(d), d3.event.stopPropagation()));
	
	svg.selectAll("circle")
	  .data(root.descendants().slice(1))
	  .filter(t => t !== root && t.parent !== root)
	  .style("display", "none");
  
	
	const label = svg.append("g")
		.style("font", "10px sans-serif")
		.attr("pointer-events", "none")
		.attr("text-anchor", "middle")
	  .selectAll("text")
	  .data(root.descendants())
	  .join("text")
		.style("fill-opacity", d => d.parent === root ? 1 : 0)
		.style("display", d => d.parent === root ? "inline" : "none")
		.text(d => d.data.name);
  
	zoomTo([root.x, root.y, root.r * 2]);
  
	function zoomTo(v) {
	  const k = width / v[2];
  
	  view = v;
  
	  label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
	  node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
	  node.attr("r", d => d.r * k);
	}
  
	function getParentAndAncestors(d){
	  if(d === root){
		var a = new Array();
		a.push(d);
		return a;
	  }
	  var a = getParentAndAncestors(d.parent);
	  a.push(d);
	  return a;
	}
	
	function zoom(d) {
	  var hierarchy = getParentAndAncestors(d);
	  console.log(hierarchy);
	  svg.selectAll("circle")
	  .filter(t => t.parent === d || hierarchy.includes(t))
	  .style("display", "block")
	  .attr("fill", d => d.children ? color(d.depth) : "white");
	  
	  
	  const focus0 = focus;
  
	  focus = d;
  
	  const transition = svg.transition()
		  .duration(d3.event.altKey ? 7500 : 750)
		  .tween("zoom", d => {
			const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
			return t => zoomTo(i(t));
		  });
  
	  label
		.filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
		.transition(transition)
		  .style("fill-opacity", d => d.parent === focus ? 1 : 0)
		  .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
		  .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
	}
  
  


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// var margin = 20,
// 		padding = 2,
// 		diameter = 600,
// 		dataa = data();

// var color = d3.scale.linear()
// 		.domain([0, depthCount(dataa)])
// 		.range(["white", "#FDCE17"])

// var pack = d3.layout.pack()
// 		.padding(padding)
// 		.size([diameter, diameter])
// 		.value(function(d) {
// 				//return d.size;
// 			return 100;
// 		}),
// 		arc = d3.svg.arc().innerRadius(0),
// 		pie = d3.layout.pie;

// var svg = d3.select("svg")
// 		.attr("width", diameter)
// 		.attr("height", diameter)
// 		.append("g")
// 		.attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

// var focus = dataa,
// 		nodes = pack.nodes(dataa),
// 		//nodes = svg.selectAll("g.node")
// 		//.data(pack.nodes(root)),
// 		view;


// var circle = svg.selectAll("circle")
// 		.data(nodes)
// 		.enter().append("circle")
// 		.attr("class", function(d) {
// 				return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
// 		})
// 		.style("fill", function(d) {
// 				return d.children ? color(d.depth) : null;
// 		})
// 		.on("click", function(d) {
// 				if (focus !== d) zoom(d), d3.event.stopPropagation();
// 		});

// var text = svg.selectAll("text")
// 		.data(nodes)
// 		.enter().append("text")
// 		.attr("class", "label")
// 		.style("fill-opacity", function(d) {
// 				return d.parent === dataa ? 1 : 0;
// 		})
// 		.style("display", function(d) {
// 				return d.parent === dataa ? null : "none";
// 		})
// 		.text(function(d) {
// 				return d.name;
// 		});

// var node = svg.selectAll("circle,text");

// d3.select("body")
// 		.on("click", function() {
// 				zoom(dataa);
// 		});

// zoomTo([dataa.x, dataa.y, dataa.r * 2 + margin]);

// function zoom(d) {
// 		var focus0 = focus;
// 		focus = d;

// 		var transition = d3.transition()
// 				.duration(d3.event.altKey ? 7500 : 750)
// 				.tween("zoom", function(d) {
// 						var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
// 						return function(t) {
// 								zoomTo(i(t));
// 						};
// 				});

// 		transition.selectAll("text")
// 				.filter(function(d) {
// 						return d.parent === focus || this.style.display === "inline";
// 				})
// 				.style("fill-opacity", function(d) {
// 						return d.parent === focus ? 1 : 0;
// 				})
// 				.each("start", function(d) {
// 						if (d.parent === focus) this.style.display = "inline";
// 				})
// 				.each("end", function(d) {
// 						if (d.parent !== focus) this.style.display = "none";
// 				});
// }

// function zoomTo(v) {
// 		var k = diameter / v[2];
// 		view = v;
// 		node.attr("transform", function(d) {
// 				return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
// 		});
// 		circle.attr("r", function(d) {
// 				return d.r * k;
// 		});
// }

// /**
//  * Counts JSON graph depth
//  * @param {object} branch
//  * @return {Number} object graph depth
//  */
// function depthCount(branch) {
// 		if (!branch.children) {
// 				return 1;
// 		}
// 		return 1 + d3.max(branch.children.map(depthCount));
// }

// d3.select(self.frameElement).style("height", diameter + "px");


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// window.onload = function() {
//   document.getElementById('button').addEventListener('click', function() {
//     chrome.identity.getAuthToken({interactive: true}, function(token) {
//       let init = {
//         method: 'GET',
//         async: true,
//         headers: {
//           Authorization: 'Bearer ' + token,
//           'Content-Type': 'application/json'
//         },
//         'contentType': 'json'
//       };
//       fetch(
//         'https://gmail.googleapis.com/gmail/v1/users/me/profile',
//         init)
//         .then((response) => response.json())
//         .then(async function(data){
//           amountOfEmails = data.messagesTotal;
//         })
//         .then(async function() {
//           emails = await listAllEmails(token, 'category:promotions')
//         }).then(async function(){
//           sizeOfInbox = await getSizeOfEmails(token, emails)
//           document.getElementById('amountOfEmails').innerHTML = amountOfEmails
//           document.getElementById('sizeOfInbox').innerHTML = `${parseFloat(sizeOfInbox / 1048576).toFixed(2)}MB`
//           document.getElementById('uitstoot').innerHTML = `${parseFloat((sizeOfInbox / 1048576) * 2.26 / 1000).toFixed(2)} kilograms of CO2 per year`
//         });
//     });
//   });

//   document.getElementById("driveButton").addEventListener('click', function(){
//     chrome.identity.getAuthToken({interactive: true}, async function(token) {
//       await getDriveInfo(token)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         var amountOfData = parseFloat(data.storageQuota.usageInDrive) + parseFloat(data.storageQuota.usageInDriveTrash)
//         document.getElementById('driveSize').innerHTML = `${parseFloat(amountOfData / 1073741824).toFixed(2)}GB in your drive`
//         document.getElementById('driveUitstoot').innerHTML = `${parseFloat((amountOfData / 1048576) * 2.26 / 1000).toFixed(2)} kilogram of CO2 per year`
//       })
//     });
//   })
// };
