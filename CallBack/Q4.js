const books = [
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
    
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},

    {title: '1984', author: 'George Orwell', year: 1949},

    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},

    {title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: 1967}
  ];

  function extractTitles(books,callback){
    const titles = books.map((bookObj)=>bookObj.title);
    callback(titles);
  }

  function logTitles(titles){
    titles.sort();
    console.log(titles);
  }

  extractTitles(books,logTitles);
  