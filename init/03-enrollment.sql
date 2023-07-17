-- Creating a Enrollment table
CREATE TABLE [dbo].[Enrollment] (
    -- id column of type int using identity sequence that start at 1 and increment by 1 which cannot be null
    [EnrollmentID] INT IDENTITY (1, 1) NOT NULL,
    -- column that is decimal with decimal that cannot be null 
    -- precision is the total number of decimal digits the 2nd number is scale, the digits stored to the 
    -- right of the decimal point
    [Grade]        DECIMAL(3, 2) NULL,
    -- Course id of int that cannot be null, used to link to Course table 
    [CourseID]     INT NOT NULL,
    -- Student id of int that cannot be null, used to link to Student table 
    [StudentID]    INT NOT NULL,
    PRIMARY KEY CLUSTERED ([EnrollmentID] ASC),
    -- This code make freign keys in this table as linked to primary keys in the target table. It also
    -- define the rule on delete to be cascading form of deletion
    CONSTRAINT [FK_dbo.Enrollment_dbo.Course_CourseID] FOREIGN KEY ([CourseID]) 
        REFERENCES [dbo].[Course] ([CourseID]) ON DELETE CASCADE,
    CONSTRAINT [FK_dbo.Enrollment_dbo.Student_StudentID] FOREIGN KEY ([StudentID]) 
        REFERENCES [dbo].[Student] ([StudentID]) ON DELETE CASCADE
)
