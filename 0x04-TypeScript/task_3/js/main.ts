/// <reference path="./crud.js" />
import {RowID, RowElement} from './interface'
import * as CRUD from './crud';
import { insertRow, deleteRow, updateRow } from './crud';
const row : RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}
const newRowID: RowID = insertRow(row);
row.age = 23;
const updatedRow: RowElement = row;
updateRow(newRowID, updatedRow);
deleteRow(newRowID);