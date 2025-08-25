import * as React from "react";
import {
  ModuleRegistry,
  AllCommunityModule,
  themeMaterial,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import players from "../data/players.json";
import { useState } from "react";
import "./PitchingStatGrid.css";

ModuleRegistry.registerModules([AllCommunityModule]);

import { themeQuartz, iconSetMaterial } from "ag-grid-community";

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz.withPart(iconSetMaterial).withParams({
  accentColor: "#FF0000",
  backgroundColor: "#1f2836",
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  columnBorder: true,
  fontFamily: ["Arial", "sans-serif"],
  foregroundColor: "#FFF",
  headerBackgroundColor: "#389146",
  headerFontSize: 14,
  headerRowBorder: true,
  headerVerticalPaddingScale: 1,
  rowBorder: true,
  rowVerticalPaddingScale: 1,
  spacing: 8,
  wrapperBorder: true,
});

function BattingStatGrid() {
  const playerData = Object.entries(players.Stats).map(
    ([playerName, playerData]) => {
      let totalBases =
        playerData.Batting.summary_singles +
        playerData.Batting.summary_doubles * 2 +
        playerData.Batting.summary_triples * 3 +
        playerData.Batting.summary_homeruns * 4;
      let onBasePercentage =
        (playerData.Batting.summary_hits +
          playerData.Batting.summary_walks_bb +
          playerData.Batting.summary_walks_hbp) /
        playerData.Batting.summary_at_bats;
      let sluggingPercentage = totalBases / playerData.Batting.summary_at_bats;

      return {
        Player: playerName,
        GP: playerData.Misc.game_appearances,
        H: playerData.Batting.hits,
        AB: playerData.Batting.summary_at_bats,
        S: playerData.Batting.summary_singles,
        D: playerData.Batting.summary_doubles,
        T: playerData.Batting.summary_triples,
        HR: playerData.Batting.summary_homeruns,
        TB: totalBases,
        RBI: playerData.Batting.summary_rbi,
        BB:
          playerData.Batting.summary_walks_bb +
          playerData.Batting.summary_walks_hbp,
        K: playerData.Batting.summary_strikeouts,
        AVG: (playerData.Batting.summary_hits / playerData.Batting.summary_at_bats).toFixed(3),
        OBP: onBasePercentage.toFixed(3),
        SLG: sluggingPercentage.toFixed(3),
        "OPS+": (onBasePercentage + sluggingPercentage).toFixed(3),
      };
    }
  );

  //   console.log(playerData);

  const [rowData, setRowData] = useState(playerData);
  const [colDefs, setColDefs] = useState([
    {
      field: "Player",
      headerName: "",
      flex: 2,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "GP",
      headerName: "GP",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "H",
      headerName: "H",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "AB",
      headerName: "AB",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "S",
      headerName: "S",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "D",
      headerName: "D",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "T",
      headerName: "T",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "HR",
      headerName: "HR",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "TB",
      headerName: "TB",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "RBI",
      headerName: "RBI",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "BB",
      headerName: "BB",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "K",
      headerName: "K",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "AVG",
      headerName: "AVG",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "OBP",
      headerName: "OBP",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "SLG",
      headerName: "SLG",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "OPS+",
      headerName: "OPS+",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
  ]);

  return (
    <div className="stat-grid" style={{ height: 500, width: "100%" }}>
      <AgGridReact theme={myTheme} rowData={rowData} columnDefs={colDefs} />
      <h3>GLOSSARY</h3>
      <ul>
        <li>GP: Games Played</li>
        <li>H: Hits</li>
        <li>AB: At Bats</li>
        <li>S: Singles</li>
        <li>D: Doubles</li>
        <li>T: Triples</li>
        <li>HR: Home Runs</li>
        <li>TB: Total Bases</li>
        <li>RBI: Runs Batted In</li>
        <li>BB: Walks</li>
        <li>K: Strikeouts</li>
        <li>AVG: Batting Average</li>
        <li>OBP: On-Base Percentage</li>
        <li>SLG: Slugging Percentage</li>
        <li>OPS+: On-Base Plus Slugging Percentage</li>
      </ul>
    </div>
  );
}

export default BattingStatGrid;
