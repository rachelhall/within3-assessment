import { gql } from "@apollo/client";

export const GET_MISSIONS = gql`
  query Missions($limit: Int) {
    missions(limit: $limit) {
      id
      name
    }
  }
`;

export const GET_MISSION = gql`
  query Mission($missionId: ID!) {
    mission(id: $missionId) {
      description
      id
      manufacturers
      name
      payloads {
        id
      }
      twitter
      website
      wikipedia
    }
  }
`;
