-- Creating a Course table
CREATE TABLE [dbo].[Course] (
    -- id column of type int using identity sequence that start at 1 and increment by 1 which cannot be null
    [CourseID] INT           IDENTITY (1, 1) NOT NULL,
    -- field as nvarchar is a unicode string type - in this case a length of 50 chars
    [Title]    NVARCHAR (50) NULL,
    -- field as integer
    [Credits]  INT           NULL,
     -- Using id as the key in ascending order
    PRIMARY KEY CLUSTERED ([CourseID] ASC)
)
