export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

// export const getPageArray = (totalPage) => {
//     let active = 2;
//     let items = [];
//     for (let number = 1; number <= totalPage; number++) {
//       items.push(
//         <Pagination.Item key={number} active={number === active}>
//           {number}
//         </Pagination.Item>
//       );
//     }
// }