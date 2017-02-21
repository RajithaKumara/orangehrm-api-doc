define({ "api": [
  {
    "type": "get",
    "url": "/employee/:id/contact-detail",
    "title": "Employee Contact detail",
    "name": "GetEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"fullName\": \"John Doe\",\n        \"telephone\": \"03131238\",\n        \"email\": \"test@example.com\",\n        \"address\": \"17 Clifford Rd, Wellington\",\n        \"country\": \"New Zealand\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/supervisor",
    "title": "Employee Contact detail",
    "name": "GetEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "supervisors",
            "description": "<p>employee Supervisors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\": [\n      {\n        \"Id\": \"001\",\n        \"fullName\": \"John Doe\",\n        \"reportingMethod\": \"direct\"\n      },\n      {\n        \"Id\": \"002\",\n        \"fullName\": \"John Max\",\n        \"reportingMethod\": \"Indirect\"\n      },\n   ],\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-supervisor-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/dependent",
    "title": "Employee Dependents",
    "name": "GetEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "employee",
            "description": "<p>dependents.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n     {\n        \"name\": \"Inu Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"1989-09-02\"\n     },\n     {\n        \"name\": \"Sam Lim\",\n        \"relationship\": \"Daughter\",\n        \"dob\": \"2009-09-02\"\n     }\n    ],\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-dependent-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id",
    "title": "Employee detail",
    "name": "GetEmployeeDetail",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>First name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last name of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the employee.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the employee.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"id\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Doe\",\n        \"status\": \"active\",\n        \"jobtitle\": \"web developer\",\n        \"supervisor\": \"Mike com\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    },\n  \"rels\": {\n    \"contact-detail\": \"/employee/:id/contact-detail\",\n    \"supervisor\": \"/employee/:id/supervisor\",\n    \"job-detail\": \"/employee/:id/job-detail\",\n    \"dependent\": \"/employee/:id/dependent\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/2-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/:id/job-detail",
    "title": "Employee Job detail",
    "name": "GetEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job title name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Job category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Employee joined date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>Employee contract end date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":\n    {\n        \"title\": \"Web Developer\",\n        \"category\": \"Engineering\",\n        \"joinedDate\": \"2001-01-12\",\n        \"startDate\": \"2001-02-01\",\n        \"endDate\": \"2005-02-01\"\n    },\n  \"rels\": {\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the employee was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/job-detail",
    "title": "Save Employee Job detail",
    "name": "SaveEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Optional Job title name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Optional Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Optional Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Optional Employee contract start date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>Optional data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/employee/search",
    "title": "Employee Search",
    "name": "SearchEmployee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>employee name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>employee Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>employee status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "supervisor",
            "description": "<p>supervisor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "jobtitle",
            "description": "<p>employee job title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "unit",
            "description": "<p>Employee Unit</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dob",
            "description": "<p>employee birth day</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "gender",
            "description": "<p>employee gender</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>record limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>pagination number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Matching Employee list</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rels",
            "description": "<p>API relations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n  {\n    \"data\":[\n    {\n        \"id\": \"1\",\n        \"employeeNumber\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Doe\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Doe\",\n        \"status\": \"active\",\n        \"jobTitle\": \"web developer\",\n        \"supervisor\": \"Mike com\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    },\n    {\n        \"id\": \"002\",\n        \"employeeNumber\": \"001\",\n        \"firstName\": \"John\",\n        \"lastName\": \"Mass\",\n        \"middleName\": \"\",\n        \"fullName\": \"John Mass\",\n        \"status\": \"active\",\n        \"jobTitle\": \"web developer\",\n        \"supervisor\": \"Simon English\",\n        \"supervisorId\": \"2\",\n        \"dob\": \"1989-09-7\",\n        \"unit\": \"development\",\n        \"gender\": \"M\"\n    }\n  ],\n  \"rels\": {\n    \"next\": \"/employee/search?page=3\",\n    \"previous\": \"/employee/search?page=1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmployeeNotFound.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"EmployeeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/employee-search-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id",
    "title": "Update Employee detail",
    "name": "UpdateEmployeeDetails",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Middle Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Employee contract start date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/3-update-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "del",
    "url": "/employee/:id/dependent",
    "title": "Delete Employee Dependents",
    "name": "deleteEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "sequenceNumber",
            "description": "<p>Mandatory sequence number of the dependent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Deleting failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": [\"Deleting failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/delete-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id",
    "title": "Save Employee",
    "name": "saveEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Mandatory First name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "middleName",
            "description": "<p>Optional Middle name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lstName",
            "description": "<p>Mandatory Last name of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>employee number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 40 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/1-save-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/contact-detail",
    "title": "Save Employee Contact detail",
    "name": "saveEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Optional address of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Optional email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Optional phone of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-contact-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/employee/:id/dependent",
    "title": "Save Employee Dependent",
    "name": "saveEmployee_dependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Optional date of birth of dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Optional relationship type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/save-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "employee/:id/action/terminate",
    "title": "Terminate employment",
    "name": "terminateEmployee",
    "group": "Employee",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Mandatory",
            "description": "<p>termination date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Optional termination note.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully terminated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Termination failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/4-terminate-employee-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/contact-detail",
    "title": "Update Employee Contact detail",
    "name": "updateEmployeeContactDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Optional address of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Optional email of the employee.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Optional phone of the employee.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully updated\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Updating failed\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-contact-details-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/dependent",
    "title": "Update Employee Dependents",
    "name": "updateEmployeeDependents",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory name of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "relationship",
            "description": "<p>Mandatory relationship of the dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Optional date of birth of dependent.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Optional relationship type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>success response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": [\"updating failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-dependents-end-point.php",
    "groupTitle": "Employee"
  },
  {
    "type": "put",
    "url": "/employee/:id/job-detail",
    "title": "Update Employee Job detail",
    "name": "updateEmployeeJobDetails",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "employee",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Job Optional title name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Optional Job category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "joinedDate",
            "description": "<p>Optional Employee joined date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>Optional Employee contract start date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object",
            "description": "<p>data success response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n {\n   \"success\": \"Successfully saved\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Bad-Response",
            "description": "<p>Saving failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": [\"Saving failed\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 202 Invalid Parameter\n{\n  \"error\": [\"invalid Parameter\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "symfony/plugins/orangehrmRESTPlugin/doc/update-employee-job-detail-end-point.php",
    "groupTitle": "Employee"
  }
] });
