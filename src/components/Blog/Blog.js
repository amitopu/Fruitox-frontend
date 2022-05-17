import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Title from "../Title/Title";

const Blog = () => {
    return (
        <>
            <Header></Header>
            <div className="lg:px-16 md:px-8 px-4">
                <h1 className="text-center text-3xl font-Cabin my-5">
                    Welcome To Our Blog
                </h1>
                <div className="text-left font-cabin w-full border-2 border-orange-600 rounded-xl px-4 py-5 my-5">
                    <h2 className="font-bold text-xl my-3">
                        What is the difference between Javascript and NodeJs?
                    </h2>
                    <p className="text-lg">
                        Javascript is an interpreted high level programming
                        language. It is used to write programs for client side
                        application that runs in web browser. On the other hand
                        NodeJs is a runtime environment for Javascript. It is
                        based on chrome v8 engine with some extra features. It
                        enebles developers to write programs that run in server
                        and outside of web browser. Before NodeJs Javascript was
                        only used to write programs for web applications run in
                        browsers. Thanks to NodeJs. Now programmers can develop
                        highly scalable network applications capable of
                        maintaining high amount of network I/O operation{" "}
                    </p>
                </div>
                <div className="text-left font-cabin w-full border-2 border-orange-600 rounded-xl px-4 py-5 my-5">
                    <h2 className="font-bold text-xl">
                        When should we use nodejs and when should you use
                        mongodb?
                    </h2>
                    <p className="text-lg">
                        Due to non-blocking I/O and event driven nature of
                        NodeJs applications can handle a lot of concurrent
                        requests. It is very efficient for serving a lot of
                        request consuming less amount of resources. It is
                        sutable to develop realtime messaging applications,
                        applications that need to perform lot of transactions
                        and network requests. Nodejs is single threaded. So it
                        cannot use full potential of multicore processors and it
                        cannot handle high CPU intensive tasks. <br />
                        MongoDB is a nosql database which is a document based
                        database. It is not tightly structured like sql based
                        databases.MongoDB represents the data as a collection of
                        documents. This features is useful for web applications
                        because it enables reading and writing different types
                        of data accross internet with convenient way. Its syntax
                        has similiarity with JSON so it is also convenient for
                        Javascript developers to develop client side applicaiton
                        with NodeJs. That is why MongoDB is frequently used with
                        NodeJs.
                    </p>
                </div>
                <div className="text-left font-cabin w-full border-2 border-orange-600 rounded-xl px-4 py-5 my-5">
                    <h2 className="font-bold text-xl">
                        What is the difference between Sql and NoSql databases?
                    </h2>
                    <p className="text-lg">
                        Sql based databases are mainly relational databases
                        where informations are stored in a tabular form and one
                        table is realted to other tables using foreign keys. SQL
                        is tightly structured schema. On the other hand NoSql
                        databases are non relational. They are not tightly
                        strucruted like Sql databases and they have dynamic
                        schema for unstructured data. Data can be stored in
                        different ways in them. They are based on document,
                        key-value, graph, or wide-column store based. Sql
                        databases are vertically scalable and NoSql databases
                        are horizontally scalable.
                    </p>
                </div>
            </div>
            <Title></Title>
            <Footer></Footer>
        </>
    );
};

export default Blog;
