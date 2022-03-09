import fs from 'fs';
import path from 'path';

export function getPathsForFolder(folder) {
  const paths = fs
  .readdirSync(path.join(process.cwd(), `content/${folder}`))
  .map((filename) => {
    const trimmedName = filename.substring(0, filename.length - 3)
    return {
      params: { slug: trimmedName },
    }
  });

  return paths;
}

export function getPostParamsForFolder(folder) {
  const paths = fs
  .readdirSync(path.join(process.cwd(), `content/${folder}`))
  .map((filename) => {
    const [year, month, day, slug] = constructPostPath(filename);
    return {
      params: { 
        year,
        month,
        day,
        slug,
      },
    }
  });

  return paths;
}

export function constructPostPath(filename) {
  const trimmedName = filename.split('.')[0];
  const [date, slug] = trimmedName.split('_');
  const [ year, month, day ] = date.split('-');

  return [year, month, day, slug];
}