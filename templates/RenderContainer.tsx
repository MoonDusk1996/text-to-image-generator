import { useContext } from "react";
import ProgressiveImg from "../components/ProgressiveImg";
import { DataContext } from "../contexts/DataContext";
import styles from "../styles/Home.module.css";

import { Button } from "@mui/material/";

export const RenderContainer: React.FC = () => {
  const { data } = useContext(DataContext);

  async function downloadImage(imageSrc:any) {
    console.log(data.data.url)
    const image = await fetch(data?.data?.url);
    console.log("2")
    const imageBlog = await image.blob();
    console.log("3")
    const imageURL = URL.createObjectURL(imageBlog);
    console.log("4")

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "image file name here";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
                  }}
                  variant="contained"
                  href={data.data.url}
                  target="_blank"
                  fullWidth
                >
                  original size
                </Button>
              </div>
              <div>
                <Button
                  className={styles.uiButton}
                  sx={{
                    backgroundColor: "teal",
                    marginBottom: "10px",
                    fontFamily: "'VT323', monospace;",
                    fontSize: "medium",
                  }}
                  fullWidth
                  variant="contained"
                  onClick={() => downloadImage(data.data.url)}
                >
                  download
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
