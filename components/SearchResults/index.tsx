import { FC } from "react";

import styles from "./styles.module.css";

export const SearchResults: FC = ({ children }) => (
  <div className={`${styles["search-results"]}`}>
    {children}
  </div>
);
