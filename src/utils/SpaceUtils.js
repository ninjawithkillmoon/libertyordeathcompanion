class SpaceUtilsClass {

	spaceHasBritish(space) {
		return space.britishForts > 0 || space.britishRegulars > 0 || space.britishTories > 0;
	}

}

const SpaceUtils = new SpaceUtilsClass();

export default SpaceUtils;