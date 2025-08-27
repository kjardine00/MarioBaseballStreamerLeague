import * as React from "react";
import {
  ModuleRegistry,
  AllCommunityModule,
  themeMaterial,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import players from "../data/players.json";
import { useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

import { themeQuartz, iconSetMaterial } from "ag-grid-community";

// to use myTheme in an application, pass it to the theme grid option
const myTheme = themeQuartz.withPart(iconSetMaterial).withParams({
  accentColor: "var(--color-blue)",
  backgroundColor: "var(--color-card-background)",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  columnBorder: true,
  fontFamily: ["Arial", "sans-serif"],
  foregroundColor: "var(--color-text)",
  headerBackgroundColor: "var(--color-blue)",
  headerFontSize: 14,
  headerRowBorder: true,
  headerVerticalPaddingScale: 1,
  rowBorder: true,
  rowVerticalPaddingScale: 1,
  spacing: 7,
  wrapperBorder: true,
});

function PitchingStatGrid() {
  const playerData = Object.entries(players.Stats).map(
    ([playerName, playerData]) => ({
      Player: playerName,
      GP: playerData.Misc.game_appearances,
      P: playerData.Pitching.total_pitches,
      OpBB: playerData.Pitching.walks_bb + playerData.Pitching.walks_hbp,
      OpH: playerData.Pitching.hits_allowed,
      K: playerData.Pitching.strikeouts_pitched,
      "Star P": playerData.Pitching.star_pitches_thrown,
      W: playerData.Misc.home_wins + playerData.Misc.away_wins,
    })
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
      field: "P",
      headerName: "P",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "OpBB",
      headerName: "Op. BB",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "OpH",
      headerName: "Op. H",
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
      field: "Star P",
      headerName: "Star Pitches",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
    {
      field: "W",
      headerName: "W",
      flex: 1,
      resizable: false,
      suppressSizeToFit: true,
    },
  ]);

  return (
    <div className="stat-grid" style={{ height: 500, width: "100%" }}>
      <AgGridReact theme={myTheme} rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default PitchingStatGrid;
