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