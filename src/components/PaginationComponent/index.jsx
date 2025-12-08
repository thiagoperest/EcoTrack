import {Pagination} from "@mui/material";
import styles from "./styles.module.css";

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <div className={styles.paginationContainer}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#14cbf0",
            color: "#fff",
          },
          "& .MuiPaginationItem-root.Mui-selected:hover": {
            backgroundColor: "#0fb5d6",
          },
        }}
      />
    </div>
  );
}
