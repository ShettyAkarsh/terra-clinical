import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';
import ItemView from 'terra-clinical-item-view';
import IconFeatured from 'terra-icon/lib/icon/IconFeatured';

const pinnedColumns = [
  {
    id: 'Column-0',
    width: 200,
    text: 'Column 0',
  },
  {
    id: 'Column-1',
    width: 200,
    text: 'Column 1',
  },
  {
    id: 'Column-2',
    width: 200,
    text: 'Column 2',
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    width: 200,
    text: 'Column 3',
  },
  {
    id: 'Column-4',
    width: 200,
    text: 'Column 4',
  },
  {
    id: 'Column-5',
    width: 200,
    text: 'Column 5',
  },
  {
    id: 'Column-6',
    width: 200,
    text: 'Column 6',
  },
  {
    id: 'Column-7',
    width: 200,
    text: 'Column 7',
  },
  {
    id: 'Column-8',
    width: 200,
    text: 'Column 8',
  },
  {
    id: 'Column-9',
    width: 200,
    text: 'Column 9',
  },
];

class DatagridWithCustomContent extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: (
          <ItemView
            displays={[
              <ItemView.Display icon={<IconFeatured />} text={`Row-${rowIndex}, ${columnKey}`} />,
              <ItemView.Display text="Cell" />,
              <ItemView.Display text="Example" />,
            ]}
          />
        ),
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: DatagridWithCustomContent.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div style={{ height: '800px' }}>
        <DataGrid
          accessibilityPrefix="basic-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            DatagridWithCustomContent.buildSection('section_0', 30),
          ]}
          rowHeight="5rem"
          headerHeight="4rem"
          fill
        />
      </div>
    );
  }
}

export default DatagridWithCustomContent;
