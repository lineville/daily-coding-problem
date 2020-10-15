using System;
using System.Linq;

namespace aug_13
{
  class Program
  {

    private static double ClosestDegrees(String time)
    {
      int hours = ParseTime(time).Item1;
      int minutes = ParseTime(time).Item2;

      ValidateTime(hours, minutes);

      double hoursAngle = (hours * 60 + minutes) * 0.5;
      double minutesAngle = minutes * 6;
      double angleDifference = Math.Abs(hoursAngle - minutesAngle);
      return Math.Min(angleDifference, 360 - angleDifference);
    }

    private static Tuple<int, int> ParseTime(String time)
    {
      int[] parts = time.Split(':').Select(part => Convert.ToInt32(part)).ToArray();
      return new Tuple<int, int>(parts[0], parts[1]);
    }


    private static void ValidateTime(double hours, double minutes)
    {
      if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59)
      {
        throw new Exception("Invalid time!!");
      }
    }

    static void Main(string[] args)
    {
      Boolean shouldKeepGoing = true;
      while (shouldKeepGoing)
      {

        Console.Write("Please enter a time in the format: hh:mm --> ");
        String time = Console.ReadLine();
        Console.WriteLine($"Angle at time {time} is {ClosestDegrees(time)}°");
        Console.Write("Another? ( Y / N )");
        String userResponse = Console.ReadLine().ToUpper();
        shouldKeepGoing = userResponse == "Y";
      }
      Console.WriteLine("Have a good one 😁!");
    }
  }
}
