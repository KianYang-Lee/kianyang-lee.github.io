export async function load({ params, url }) {
	const modules = import.meta.glob<App.MdsvexFile>('/src/posts/**/*.md');

  let resolvedEntries = [] as [string, App.MdsvexFile][];

  await Promise.all(Object.entries(modules).map(async entry => {
    const fullPathSplitted = entry[0].split('/')
    const filename = fullPathSplitted.pop()
    if (!filename) {
      throw new Error('filename is undefined!')
    }

    const category = fullPathSplitted.pop()
    if (!category) {
      throw new Error('category is undefined')
    }
    
    const name = filename.substring(0, filename.indexOf('.'))
    const resolvedEntry = await entry[1]()
    
    resolvedEntries = [...resolvedEntries, [`/blog/${category}/${name}`, resolvedEntry]]
  }))

  
	return {
    url, resolvedEntries
	};
}