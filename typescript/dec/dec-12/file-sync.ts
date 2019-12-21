// * Daily Coding Problem Dec 12th 2019

// * [Hard] -- Google

/**
 * * Implement a file syncing algorithm for two computers over a low-bandwidth network.
 * * What if we know the files in the two computers are mostly the same?
 */

// * You have two file system (trees) and we need to efficiently track the differences between them.
// * Low bandwidth network implies that we want to minimize the amount of communication that occurs
// * between the two systems. The fact that they are two systems means that one compute does not have
// * free and global access to the other computers resources and that they must communicate across
// * the costly network to inform the other when things have changed.

// * Model each Computer as a tree that has a reference to an interface of the other computer.
// * Each computer can only send a message (invoking the only public mehtod) on the reference.
// * This will be the mechanism that our systems will use to stay in sync.

class Directory {
  files: Array<File>;
  directories: Array<Directory>;

  constructor() {
    this.files = [];
    this.directories = [];
  }
}

interface Network {
  postUpdate: (sender : Directory, receiver : Directory, message: Object) => void;
}

class FileSync implements Network {

    fileSystem1 : Directory
    fileSystem2 : Directory

    constructor(fs1 : Directory, fs2: Directory) {
        this.fileSystem1 = fs1;
        this.fileSystem2 = fs2;
    }


    postUpdate = () => {

    }
}

const testNetwork = () : void => {
    let pc1 : Directory = new Directory();
    let pc2 : Directory = new Directory();


    let syncer = new FileSync(pc1, pc2);
    
}
