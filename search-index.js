var searchIndex = {};
searchIndex['tar'] = {"items":[[0,"","tar","A library for reading and writing TAR archives",null,null],[3,"Archive","","A top-level representation of an archive file.",null,null],[3,"Entries","","An iterator over the entries of an archive.",null,null],[3,"EntriesMut","","An iterator over the entries of an archive.",null,null],[3,"Entry","","A read-only view into an entry of an archive.",null,null],[3,"Header","","Representation of the header of an entry in an archive",null,null],[12,"name","","",0,null],[12,"mode","","",0,null],[12,"owner_id","","",0,null],[12,"group_id","","",0,null],[12,"size","","",0,null],[12,"mtime","","",0,null],[12,"cksum","","",0,null],[12,"link","","",0,null],[12,"linkname","","",0,null],[12,"ustar","","",0,null],[12,"ustar_version","","",0,null],[12,"owner_name","","",0,null],[12,"group_name","","",0,null],[12,"dev_major","","",0,null],[12,"dev_minor","","",0,null],[12,"prefix","","",0,null],[11,"new","","Create a new archive with the underlying object as the reader/writer.",1,{"inputs":[{"name":"archive"},{"name":"o"}],"output":{"name":"archive"}}],[11,"into_inner","","Unwrap this archive, returning the underlying object.",1,{"inputs":[{"name":"archive"}],"output":{"name":"o"}}],[11,"entries","","Construct an iterator over the entries of this archive.",1,{"inputs":[{"name":"archive"}],"output":{"name":"result"}}],[11,"entries_mut","","Construct an iterator over the entries in this archive.",1,{"inputs":[{"name":"archive"}],"output":{"name":"result"}}],[11,"unpack","","Unpacks the contents tarball into the specified `dst`.",1,{"inputs":[{"name":"archive"},{"name":"p"}],"output":{"name":"result"}}],[11,"append","","Adds a new entry to this archive.",1,{"inputs":[{"name":"archive"},{"name":"header"},{"name":"read"}],"output":{"name":"result"}}],[11,"append_path","","Adds a file on the local filesystem to this archive.",1,{"inputs":[{"name":"archive"},{"name":"p"}],"output":{"name":"result"}}],[11,"append_file","","Adds a file to this archive with the given path as the name of the file\nin the archive.",1,{"inputs":[{"name":"archive"},{"name":"p"},{"name":"file"}],"output":{"name":"result"}}],[11,"append_dir","","Adds a directory to this archive with the given path as the name of the\ndirectory in the archive.",1,{"inputs":[{"name":"archive"},{"name":"p"},{"name":"p2"}],"output":{"name":"result"}}],[11,"finish","","Finish writing this archive, emitting the termination sections.",1,{"inputs":[{"name":"archive"}],"output":{"name":"result"}}],[11,"next","","",2,{"inputs":[{"name":"entries"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"entriesmut"}],"output":{"name":"option"}}],[11,"clone","","",0,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[11,"new","","Creates a new blank ustar header ready to be filled in",0,{"inputs":[{"name":"header"}],"output":{"name":"header"}}],[11,"as_bytes","","Returns a view into this header as a byte array.",0,null],[11,"set_metadata","","Blanket sets the metadata in this header from the metadata argument\nprovided.",0,{"inputs":[{"name":"header"},{"name":"metadata"}],"output":null}],[11,"size","","Returns the file size this header represents.",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_size","","Encodes the `size` argument into the size field of this header.",0,{"inputs":[{"name":"header"},{"name":"u64"}],"output":null}],[11,"path","","Returns the pathname stored in this header.",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"path_bytes","","Returns the pathname stored in this header as a byte array.",0,{"inputs":[{"name":"header"}],"output":{"name":"cow"}}],[11,"set_path","","Sets the path name for this header.",0,{"inputs":[{"name":"header"},{"name":"p"}],"output":{"name":"result"}}],[11,"mode","","Returns the mode bits for this file",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_mode","","Encodes the `mode` provided into this header.",0,{"inputs":[{"name":"header"},{"name":"u32"}],"output":null}],[11,"uid","","Returns the value of the owner's user ID field",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_uid","","Encodes the `uid` provided into this header.",0,{"inputs":[{"name":"header"},{"name":"u32"}],"output":null}],[11,"gid","","Returns the value of the group's user ID field",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_gid","","Encodes the `gid` provided into this header.",0,{"inputs":[{"name":"header"},{"name":"u32"}],"output":null}],[11,"mtime","","Returns the last modification time in Unix time format",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_mtime","","Encodes the `mtime` provided into this header.",0,{"inputs":[{"name":"header"},{"name":"u64"}],"output":null}],[11,"username","","Return the username of the owner of this file, if present and if valid\nutf8",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"username_bytes","","Returns the username of the owner of this file, if present",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"set_username","","Sets the username inside this header.",0,{"inputs":[{"name":"header"},{"name":"str"}],"output":{"name":"result"}}],[11,"groupname","","Return the group name of the owner of this file, if present and if valid\nutf8",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"groupname_bytes","","Returns the group name of the owner of this file, if present",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"set_groupname","","Sets the group name inside this header.",0,{"inputs":[{"name":"header"},{"name":"str"}],"output":{"name":"result"}}],[11,"device_major","","Returns the device major number, if present.",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"set_device_major","","Encodes the value `major` into the dev_major field of this header.",0,{"inputs":[{"name":"header"},{"name":"u32"}],"output":null}],[11,"device_minor","","Returns the device minor number, if present.",0,{"inputs":[{"name":"header"}],"output":{"name":"option"}}],[11,"set_device_minor","","Encodes the value `minor` into the dev_major field of this header.",0,{"inputs":[{"name":"header"},{"name":"u32"}],"output":null}],[11,"cksum","","Returns the checksum field of this header.",0,{"inputs":[{"name":"header"}],"output":{"name":"result"}}],[11,"set_cksum","","Sets the checksum field of this header based on the current fields in\nthis header.",0,{"inputs":[{"name":"header"}],"output":null}],[11,"header","","Returns access to the header of this entry in the archive.",4,{"inputs":[{"name":"entry"}],"output":{"name":"header"}}],[11,"unpack","","Writes this file to the specified location.",4,{"inputs":[{"name":"entry"},{"name":"p"}],"output":{"name":"result"}}],[11,"read","","",4,null],[11,"seek","","",4,{"inputs":[{"name":"entry"},{"name":"seekfrom"}],"output":{"name":"result"}}],[11,"from","std::io::error","",5,{"inputs":[{"name":"error"},{"name":"tarerror"}],"output":{"name":"error"}}]],"paths":[[3,"Header"],[3,"Archive"],[3,"Entries"],[3,"EntriesMut"],[3,"Entry"],[3,"Error"]]};
initSearch(searchIndex);
