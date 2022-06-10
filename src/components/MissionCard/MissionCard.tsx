import { useQuery } from "@apollo/client";

import React from "react";
import { IMission, IMissionVars } from "../../graphql/interfaces/interfaces";
import { GET_MISSION } from "../../graphql/queries";
import { Heading, Text } from "../../styledComponents";

import "./MissionCard.scss";

interface IProps {
  id: string;
}

export const MissionCard: React.FC<IProps> = (props) => {
  const { id } = props;

  const { data, loading, error } = useQuery<IMission, IMissionVars>(
    GET_MISSION,
    {
      variables: { missionId: id },
      skip: !id,
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was a problem... 😭</p>;
  }

  return (
    <div className="MissionCard">
      <div className="MissionCard--text">
        <Heading>{data?.mission.name}</Heading>
        <Text>
          <span style={{ fontWeight: "bold" }}>Website: </span>
          {
            <a href={data?.mission.website} target="_blank" rel="noreferrer">
              {data?.mission.website}
            </a>
          }
        </Text>
        <Text>{data?.mission.description}</Text>
      </div>
    </div>
  );
};

export default MissionCard;
