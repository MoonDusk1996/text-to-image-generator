import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { getLocalStorage, setLocalStorage } from "../helpers/Helpers";
import styles from "../styles/Home.module.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  position: "relative",
  top: "-5px",
  width: "100%",
  height: 5,
  borderRadius: "0px 0px 4px 4px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "teal" : "teal",
  },
}));

export const InputBox: React.FC = () => {
  const { generateImage, isFething, data } = useContext(DataContext);
  let prompt = getLocalStorage()?.prompt;

  function confirmedPrompt() {
    setLocalStorage(prompt, getLocalStorage()?.image)
    generateImage(prompt);
  }
  return (
    <div className={styles.inputText}>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          backgroundColor: "whitesmoke",
        }}
      >
        <InputBase
          defaultValue={prompt}
          disabled={isFething}
          sx={{
            ml: "3%",
            flex: 1,
            fontFamily: "'VT323', monospace;",
            fontSize: "large",
          }}
          placeholder="Generate a..."
          onChange={(env) => (prompt = env.target.value)}
          onKeyPress={(e: any) => {
            if (e.key === "Enter") confirmedPrompt();
          }}
        />
        <IconButton
          disabled={isFething}
          type="button"
          onClick={() => confirmedPrompt()}
          sx={{ p: "10px", color: "teal" }}
          aria-label="search"
        >
          <WorkspacesIcon />
        </IconButton>
      </Paper>
      {isFething ? <BorderLinearProgress /> : null}
      {data?.data?.message ? (
        <Paper
          sx={{
            display: "flex",
            color: "red",
            backgroundColor: "whitesmoke",
            marginTop: "10px",
          }}
        >
          <div style={{ marginLeft: "3%" }}>{data?.data?.message} </div>
          <SentimentVeryDissatisfiedIcon
            sx={{ display: "flex", alignItems: "center", padding: "5px" }}
          />
        </Paper>
      ) : null}
    </div>
  );
};
export default InputBox;
