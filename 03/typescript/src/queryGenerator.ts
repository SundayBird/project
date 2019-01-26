import { BaseObject } from "./data";

// TODO: Implement method chaining.

export const select = (obj: BaseObject, columnOptions?: Array<string>) => {
  if (columnOptions === undefined) {
    return `SELECT * FROM ${Object.getPrototypeOf(obj).constructor.name};`;
  }

  const columnStatement = columnOptions.reduce((acc: string, field: string) => {
    return acc + ` ${field},`;
  }, "");
  
  return `SELECT${columnStatement.slice(0, -1)} FROM ${Object.getPrototypeOf(obj).constructor.name};`;
}

export const insert = (obj: BaseObject, columnOptions: any) => {
  const columnStatement = Object.keys(columnOptions).reduce((acc: string, field: string) => {
    return acc + `${field}, `;
  }, "");
  const valueStatement = Object.keys(columnOptions).reduce((acc: string, field: string) => {
    return acc + `${columnOptions[field]}, `;
  }, "");
  
  return `INSERT INTO ${Object.getPrototypeOf(obj).constructor.name} (${columnStatement.slice(0, -2)}) VALUES (${valueStatement.slice(0, -2)});`;
}

// TODO: Need to rename function name.
export const delete_ = (obj: BaseObject) => {
  return `DELETE FROM ${Object.getPrototypeOf(obj).constructor.name};`;
}

// TODO: Implement Options for Operator
export const where = (statement: string, filterOption: any) => {
  // TODO: Implement filterOptions
  if (Object.keys(filterOption).length > 1) {
    throw new Error("Multi options is not supported.")
  }
  const whereStatement = Object.keys(filterOption).reduce((acc: string, field: any) => {
    if (typeof filterOption[field] === "string") {
      const value = `"${filterOption[field]}"`; 
      return acc + `${field} = ${value}`;
    } else if (typeof filterOption[field] === "number") {
      const value = filterOption[field];
      return acc + `${field} = ${value}`;
    } else {
      throw new Error("Invalid value data type");
    }
  }, "");
  return `${statement.slice(0, -1)} WHERE ${whereStatement};`;
}