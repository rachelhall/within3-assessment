import React, { useMemo, useState } from "react";

import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_MISSIONS } from "./graphql/queries";
import MissionCard from "./components/MissionCard";
import { IMissions, IMissionsVars } from "./graphql/interfaces/interfaces";
import { Button, Heading, TextInput } from "./styledComponents";
import { filterMissions } from "./utils/filterMissions";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");

  const { data, loading, error } = useQuery<IMissions, IMissionsVars>(
    GET_MISSIONS,
    {
      variables: {
        limit: 10,
      },
    }
  );

  const toggleSortDirection = () => {
    if (sortDirection === "desc") {
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    }
  };

  const alphabetizedMissions = useMemo(() => {
    const arrayForSorting = data?.missions && [...data?.missions];

    const alphabetizedArray = arrayForSorting?.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    if (sortDirection === "desc") {
      return alphabetizedArray;
    } else return alphabetizedArray?.reverse();
  }, [data?.missions, sortDirection]);

  const filteredMissions = filterMissions(alphabetizedMissions, searchTerm);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was a problem... 😭</p>;
  }

  return (
    <div className="App">
      <Heading>SpaceX Mission Tracker</Heading>
      <div className="inputContainer">
        <TextInput
          placeholder="Search..."
          text={searchTerm}
          setText={setSearchTerm}
        />
        <Button onClick={toggleSortDirection}>Sort A-Z, Z-A</Button>
      </div>
      {!loading &&
        filteredMissions?.map((mission, index: number) => {
          return <MissionCard id={mission.id} key={mission.id} />;
        })}
    </div>
  );
}

export default App;
