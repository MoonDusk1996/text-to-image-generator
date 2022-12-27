import ProgressiveImg from "../components/ProgressiveImg";
import InputBox from "../components/InputBox";
import RenderContainer from "../templates/RenderContainer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <ProgressiveImg
          image={"./logogif.gif"}
          placeholder={"./logo.png"}
          width={"100%"}
          height={"100%"}
        />
        <InputBox />
        <RenderContainer />
      </main>
    </>
  );
}
