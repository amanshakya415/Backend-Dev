/*
Q1 What is the difference between synchronous and asynchronous file operations?
->          Synchronous File Operations

 - Synchronous means the program waits until the file operation is completed.
 - The program stops (blocks) until the file is fully read or written.
 - But slower and less efficient.

            Asynchronous File Operations
 - Asynchronous means the program does not wait for the file operation to complete.
 - File operation runs in the background and Program continues executing other code.
 - Faster and more efficient.

Q2 When should you use file streams instead of reading the entire file?
-> we use file streams when the file size is very large. reading the whole file into memory can Consume too much RAM which
   Slow down or crash the application Streams read the file in small chunks, so memory usage stays low.

Q3 Explain the purpose of the ‘utf8’ encoding parameter in file operations.
-> The 'utf8' encoding parameter converts the raw binary data of a file into readable text (human readable characters or string)

Q4 What are the common error codes in file system operations and what do they mean?
-> Error Code	        Meaning
    ENOENT	        File / directory not found
    EACCES	        Permission denied
    EISDIR	        Path is a directory
    ENOTDIR	        Path is not a directory
    EMFILE	        Too many open files
    EBUSY	        File in use
    EPERM	        Operation not allowed
    EEXIST	        File already exists

Q6 Explain the concept of piping in streams with an example.
-> Piping means connecting the output of one stream directly to the input of another stream.
👉 Data flows automatically from one stream to another without manual handling.

  Why Do We Use Piping?

 -To transfer data efficiently
 -To avoid storing large data in memory
 -To process data in a streaming manner
 -To write clean and simple code

Q7 Why is it important to handle errors in file operations?
-> Handling errors in file operations is important to prevent application crashes, avoid data loss, 
   ensure security, and improve reliability.

Q8 What is the difference between writeFile and appendFile methods?
-> writeFile method writes data to a file by replacing the existing content.
   appendFile method adds new data at the end of the file without removing old data.

*/