#include "std_lib_facilities.h"

int main() {
	cout << "Enter the name of the person you want to write to.\n";
	string first_name;
	cin >> first_name;
	cout << "Dear " << first_name << ",\n";
	cout << "How are you doing? I'm doing pretty good. China just won the gold for team table tennis!\n";
	cout << "Enter the name of another friend of yours.\n";
	string friend_name;
	cin >> friend_name;
	cout << "Have you seen " << friend_name << " lately?\n";
	char friend_sex = 0;
	cout << "Is your friend male or female? (enter m or f)\n";
	cin >> friend_sex;
	if (friend_sex == 'm') {
		cout << "If you see " << friend_name << " please ask him to call me.\n";
	}
	else if (friend_sex == 'f') {
		cout << "If you see " << friend_name << " please ask her to call me.\n";
	}
	cout << "How old is " << first_name << "?\n";
	int age;
	cin >> age;
	cout << "I hear you just had a brithday and you are " << age << " years old.\n";
	if (age > 110 || age < 0) {
		simple_error("You're kidding!");
	}
	if (age < 12) {
		cout << "Next year you will be " << age + 1 << ".\n";
	}
	else if (age == 17) {
		cout << "Next year you will be able to vote.\n";
	}
	else if (age > 70) {
		cout << "I hope you are enjoying retirement.\n";
	}
}