import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        variant="outline"
        mr={2}
      >
        Prev
      </Button>
      <Button variant="outline" disabled>
        {currentPage}
      </Button>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        variant="outline"
        ml={2}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
