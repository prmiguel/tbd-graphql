-- Creating a Student table
CREATE TABLE [dbo].[Student] (
    -- Student is of type int using identity sequence that start at 1 and increment by 1 and cannot be null
    [StudentID]      INT           IDENTITY (1, 1) NOT NULL,
    -- field as nvarchar is a unicode string type - in this case a length of 50 chars
    [LastName]       NVARCHAR (50) NULL,
    -- field as nvarchar is a unicode string type - in this case a length of 50 chars
    [FirstName]      NVARCHAR (50) NULL,
    -- date time column
    [EnrollmentDate] DATETIME      NULL,
    [MiddleName] NVARCHAR(50) NULL, 
    -- Using [StudentID] as the key in ascending order
    PRIMARY KEY CLUSTERED ([StudentID] ASC)
)