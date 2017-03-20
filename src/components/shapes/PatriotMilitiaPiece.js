import React, { Component } from 'react';

class PatriotMilitiaPiece extends Component {
	render() {
		let topLevelClass = "patriotMilitiaPiece";
		if (this.props.active) {
			topLevelClass += " active";
		}
		else {
			topLevelClass += " underground";
		}

		return (
			<div className={topLevelClass}>
			  <div className="scene">
			    <div className="shape prism-1 pri-1">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-2 pri-2">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-3 pri-3">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-4 pri-4">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-5 pri-5">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-6 pri-6">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-7 pri-7">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape prism-8 pri-8">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face-wrapper rt">
			        <div className="face"></div>
			      </div>
			      <div className="face-wrapper lt">
			        <div className="face"></div>
			      </div>
			      <div className="face bm"></div>
			    </div>
			    <div className="shape cuboid-1 cub-1">
			      <div className="face ft"></div>
			      <div className="face bk"></div>
			      <div className="face rt"></div>
			      <div className="face lt"></div>
			      <div className="face bm"></div>
			      <div className="face tp"></div>
			    </div>
			    <div className="shape cylinder-1 cyl-1">
			      <div className="face bm"></div>
			      <div className="face tp"></div>
			      <div className="face side s0"></div>
			      <div className="face side s1"></div>
			      <div className="face side s2"></div>
			      <div className="face side s3"></div>
			      <div className="face side s4"></div>
			      <div className="face side s5"></div>
			    </div>
			  </div>
			</div>
		);
	}
}

export default PatriotMilitiaPiece;