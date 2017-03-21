class SpaceUtilsClass {

	spaceHasBritish(space) {
		return space.britishForts > 0 || space.britishRegulars > 0 || space.britishTories > 0;
	}

	spaceHasPatriot(space) {
		return space.patriotForts > 0 || space.patriotContinentals > 0 || space.patriotMilitiaActive > 0 || space.patriotMilitiaUnderground > 0;
	}

	spaceHasIndian(space) {
		return space.indianVillages > 0 || space.indianWarPartiesActive > 0 || space.indianWarPartiesUnderground > 0;
	}

	spaceHasFrench(space) {
		return space.frenchRegulars > 0;
	}

}

const SpaceUtils = new SpaceUtilsClass();

export default SpaceUtils;