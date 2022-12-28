import { useContext } from "react";
import ProgressiveImg from "../components/ProgressiveImg";
import { DataContext } from "../contexts/DataContext";
import styles from "../styles/Home.module.css";

import { Button } from "@mui/material/";

export const RenderContainer: React.FC = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      {data?.data?.url ? (
        <div className={styles.renderContainer}>
          <div className={styles.imgContainer}>
            <ProgressiveImg
              image={data.data.url}
              placeholder={data.data.url}
              width={"95%"}
              height={"100%"}
            />
          </div>
          <div className={styles.uiContainer}>
            <div className={styles.buttonContainer}>
              <div>
                <Button
                  className={styles.uiButton}
                  sx={{
                    backgroundColor: "teal",
                    marginBottom: "10px",
                    fontFamily: "'VT323', monospace;",
                    fontSize: "medium",
                    "&:hover": {
                      backgroundColor: "darkcyan",
                    },
                  }}
                  variant="contained"
                  href={data.data.url}
                  target="_blank"
                  fullWidth
                >
                  view original size
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RenderContainer;
