import { IMissionData } from "../graphql/interfaces/interfaces";

export const filterMissions = (
  missions?: IMissionData[],
  searchTerm?: string
) => {
  if (!searchTerm || searchTerm === "") {
    return missions;
  } else if (missions && searchTerm) {
    return missions?.filter((mission) => {
      return mission.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
};
