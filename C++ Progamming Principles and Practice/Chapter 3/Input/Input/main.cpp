#include "std_lib_facilities.h"

int main() {
	// basic variable types
	int number_of_steps = 39; //int for integers
	double flying_time = 3.5; // double for double precision floating point numbers
	char decimal_point = '.'; // char for individual characters
	string name = "Annemarie"; // string for character strings
	bool tap_on = true; // bool for logical variables

	cout << "Please enter your first name and age\n";
	string first_name = "???";
	double age = -1.0;
	cin >> first_name;
	cin >> age;
	cout << "Hello, " << first_name << "(age " << age * 12 << " months)\n";

	cout << "Please enter your first and second names\n";
	string first;
	string second;
	cin >> first >> second; // read two strings
	cout << "Hello, " << first << ' ' << second << '\n';

	int count;
	cin >> count; // reads an integer into count
	string name;
	cin >> name; // reads a string into name

	int c2 = count + 2; // + adds integers
	string s2 = name + "Jr. "; // + appends characters

	int c3 = count - 2; // - subtracts integers
	//string s2 = name - "Jr. "; // error: - isn't defined for strings
}