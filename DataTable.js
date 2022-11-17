import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const numberOfItemsPerPageList = [2, 3, 5];

const headers = [
  {
    id: 1,
    title: 'Name',
  },
  {
    id: 2,
    title: 'Value',
  },
];

const MyComponent = (props) => {
  const [page, setPage] = React.useState(0);
  const [optionsPerPage, setOptionsPerPage] = React.useState(numberOfItemsPerPageList[0]);


  const from = page * optionsPerPage;
  const to = Math.min((page + 1) * optionsPerPage, props.users.length);

  React.useEffect(() => {
    setPage(0);
  }, [optionsPerPage]);

  const tableheader = (header) => (
    <DataTable.Title key={header.id}>{header.title}</DataTable.Title>
  );

  const tableRow = (item) => (
    <DataTable.Row key={item.id}>
      <DataTable.Cell>{item.name}</DataTable.Cell>
      <DataTable.Cell>{item.id}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <PaperProvider>
      <DataTable>
        <DataTable.Header>
          {headers.map((header) => tableheader(header))}
        </DataTable.Header>

        {props.users
          .slice(
            page * optionsPerPage,
            page * optionsPerPage + optionsPerPage
          )
          .map((row) => tableRow(row))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(props.users.length / optionsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${props.users.length}`}
          showFastPaginationControls
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          optionsPerPage={setOptionsPerPage}
          setOptionsPerPage={setOptionsPerPage}
          optionsLabel={'Rows per page'}
        />
      </DataTable>
    </PaperProvider>
  );
};

export default MyComponent;
