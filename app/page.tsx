import { styles } from "./page.css";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <main>
      hello world! from hyunwlee
      <div className={styles.breakpointsTest}>
        breakpoints test
      </div>
      <Button textContent="Confirm" />
    </main>
  );
}
